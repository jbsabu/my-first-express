import express from 'express';
const PORT = 3000
const app = express()


// List of accepted requests
app.get('/hello',(req,res)=>{
  res.send("Hello there!")
})

app.get('/test',(req,res)=>{
  res.send("It's working! ")
})

app.get('/goodbye',(req,res)=>{
  res.send("ة أخرى على الفور. تقوم خدمة Google ، المقدمة مجانًا ، بترجمة الكلمات والعبارات وصفحات الويب على الفور بين الإنجليزية وأكثر من 100 لغ")
})



app.listen(PORT,()=>{
console.log(`Listening on http://localhost:${PORT}...`) 
})
