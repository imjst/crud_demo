const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()
const app = express()
const userModel = require('./userData')
const cors = require('cors');


app.use(express.json())
app.use(cors());
mongoose.connect('mongodb+srv://theHybrid:hellolove@crudcluster.8dtl8.mongodb.net/showsDB?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)
app.get('/', async (req, res) => {
    const show = new showModel(
        { showName: "TVD", showRating: 8.1, showMainCharecters: ["Damon", "Stefan"] }
    )
    try {
        console.log(show)
        await show.save()
        console.log('saved')
    } catch (err) {
        console.log(err)
    }
    res.send('Hello')
})

app.post('/', async (req, res) => {
    const data = req.body;
    console.log(data)
    const user = new userModel(data)
    try {
        console.log(user);
        await user.save()
    }
    catch (err) {
        res.send(err)
    }
})



app.listen(3001, () => {
    console.log('backend running on local 3001')
})