const express = require ('express')
const axios = require ('axios')
const PORT = 8000
const app = express()
app.use (express.json())

app.get('/',async(req,res)=>{
    try{
        const result = await axios.get(
            'https://api.bigdatacloud.net/data/reverse-geocode-client',//?latitude=37.42159&longitude=-122.0837&localityLanguage=en',
            {
                params:{
                latitude:req.body.latitude,
                longitude:req.body.longitude,
                localityLanguage:req.body.localityLanguage,
            }}

        )
        console.log('responsedat:',result.data.countryName)
        const totalresult = result.data.countryName;
        console.log(totalresult)
        res.json({totalresult})
    }catch(error){
        console.error(error)
        res.status(500).json({error:'error acquired'})
    }
})
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
