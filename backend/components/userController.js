import User from './modelUser.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async(req,res) => {
    try{
        const users = await User.findAll({
            attribute: ['id,name,email']
        });
        res.json(users);
        
    }catch(err){
        console.info(err);
    }
}


export const Register = async(req,res) =>{
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({
        msg: "Password and Confirm Password do not Match",
    });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        await User.create(
            {
                name: name,
                email: email,
                password: hashPassword,
            }
        );
        res.json({
            msg: "Registration Success!"
        })
    }catch(err){
        console.info(err);
    }
}

export const Login = async(req,res)=> {
    try{
        const user = await User.findAll({
            where: {
                email: req.body.email
            }
        });
    
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({
            msg: "Wrong Password",
        });
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({
            userId,
            name,
            email,
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn : "15s"
        });
    
        const refreshToken = jwt.sgin({
            userId,
            name,
            email,
        }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await User.update({
            refresh_token: refreshToken,
        }, {
        where: {
            id: userId
        }
        });
        res.cookie(
            'refreshToken', refreshToken,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
        });
        res.json({accessToken});
    }catch(err){
        res.status(404).json({msg:"Email not found"});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.status(204);
    const user = await user.findAll({
        where: {
            refresh_token: refreshToken,
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId  = user[0].id;
    await user.update({
        refresh_token : null,
    }, {
        where: {
            id: userId,
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(204);
}
