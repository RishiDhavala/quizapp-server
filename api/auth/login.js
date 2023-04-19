module.exports = async function login(req, res, db) {
  try {
    for (let key of [ "email","password"]) {
      if (!req.body[key])
        return res.status(400).json({
          message: `${key} is required`,
        });
    }
    let email=req.body.email;
   // let teamNo = parseInt(req.body.teamNo);
    let password = req.body.password;
   // console.log(teamNo);
    let teamData = await db.collection("teams").findOne({ email:email });
   // console.log(teamData);
    if (!teamData)
      return res.status(404).json({
        message: `There is no team with email: ${email}`,
      });
    if (teamData.password !== password)
      return res.status(401).json({
        message: "Incorrect password entered",
      });
    console.log(teamData);
    console.log(teamData.uid)
    return res.json({
      uid: teamData.uid,
      
    });

    
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};
