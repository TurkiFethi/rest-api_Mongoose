const express=require("express")
const router=express.Router()

const Contact=require("../models/contacts")


// router.get("/",(req,res)=>{
//     Contact.find()
//     .then(contacts=>res.json(contacts))
//     .catch(err=>res.send("cannot get"))
// })

router.get("/",async(req,res)=>{
  try {
    const contacts=await Contact.find()
    contacts.length===0?res.status(400).json({msg:"Object is Empty"}):res.json(contacts)
  } catch (err) {
    console.error(err)
  }

})
// router.post("/", (req, res) => {
//     const newContact = new Contact({
//       name: req.body.name,
//       email: req.body.email,
//       tel: req.body.tel
//     });
  
//     newContact
//       .save()
//       .then(contacts => res.json(contacts))
//       .catch(err => res.send("cannot post"));
//   });

router.post('/',async(req,res)=>{

        try {
          const {name,email,tel}=req.body

          const searchEmail= await Contact.findOne({email})
          console.log("email is ",email)
          if (searchEmail) return res.status(400).json({msg:"Contact already exists"})
          const newContact = new Contact({
            name,
            email,
            tel
          });
          const contacts= await newContact.save()
          // res.json({msg:"can post"})
          res.json(contacts)
        } catch (err) {
          console.error(err.message);
        }
})

// router.delete("/:id",(req,res)=>{
//   let id_contact=req.params.id
//   Contact.findOneAndDelete({ _id:id_contact})
//   .then(data=>res.send({success:true}))
//   .catch(data=>res.send({success:false}))
// })

router.delete("/:id",async(req,res)=>{
  try {
    let id_contact=req.params.id
    await Contact.findOneAndDelete({ _id:id_contact})
    res.send({success:true})
    
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
    
  }
})

// router.put("/:id", (req, res) => {
//   const contactlist = req.body;
//   Contact.findOneAndUpdate({ _id: req.params.id }, { $set: { ...contactlist } })
//     .then(data => res.send({ success: true }))
//     .catch(err => res.send({ success: false }));
// });
router.put('/:id',async(req,res)=>{
  try {
    const contactlist=req.body
    await Contact.findOneAndUpdate({_id:req.params.id},{$set:{...contactlist}})
    res.send({success:true})
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
    // res.status(500).send("error server")
  }
})


module.exports=router