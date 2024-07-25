const express = require("express")
const app = express()

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin")
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp")
  next()
})

app.use(express.static("public")) // 'public' should be your folder with static files

app.listen(8080, () => console.log("Listening on port 8080!"))
