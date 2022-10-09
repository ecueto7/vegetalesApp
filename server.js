require('dotenv').config()
// Require modules
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Vegetale = require('./models/vegetale')
// this makes 2 const vegetales & veggies 

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))

/* END Middleware */

// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET
app.get('/vegetales', (req, res) => {
    Vegetale.find({}, (err, foundVegetales) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('vegetales/Index', {
        vegetales: foundVegetales
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/vegetales/new', (req, res) => {
  res.render('vegetales/New')
})
// DELETE
app.delete('/vegetales/:id', (req, res) => {
  Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
    if(err) {
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/vegetales')
    }
  })
})
// UPDATE
app.put('/vegetales/:id', (req, res) => {
  req.body.readyToEat === 'on' || req.body.readyToEat === true ? req.body.readyToEat = true : req.body.readyToEat = false
  Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
    if(err) {
      console.error(err)
      res.status(400).send(err)
      }else {
        res.redirect(`/vegetales/${updatedVegetale._id}`)
      }
  })
})
// CREATE
app.post('/vegetales', (req, res) =>{
  // req.body which contains all of our form Data we will get from the user
  req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  Vegetale.create(req.body, (err, createdVegetale) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/vegetales/${createdVegetale._id}`)
      //res.send(createdFruit)
    }
  })
})

// EDIT (not applicable in an api)
app.get('/vegetales/:id/edit', (req, res) => {
  Vegetale.findById(req.params.id, (err, editedVegetale) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('vegetales/Edit', {
       vegetale: editedVegetale
     })
    }
  })
 })

// SHOW ---- READ ---- GET
app.get('/vegetales/:id', (req, res) => {
 Vegetale.findById(req.params.id, (err, foundVegetale) => {
   if(err){
    console.error(err)
    res.status(400).send(err)
   } else {
    res.render('vegetales/Show', {
      vegetale: foundVegetale
    })
   }
 })
})



/* END ROUTES */


// Tell the app to listen on a port
app.listen(3003, () => {
    console.log('Listening on Port 3003')
})