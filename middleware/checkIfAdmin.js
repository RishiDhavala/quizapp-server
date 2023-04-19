/*async function checkIfAdmin(req, res, db) {
  for (let key of [ "email","password","uid"]) {
      if (!req.body[key])
        return res.status(400).json({
          message: `${key} is required`,
        });}
  try {
    if (!uid) return res.status(401).send({ message: "Unauthorized" });
    let admin = await db.collections("Admin").findOne({ uid: uid ,password:password,email:email});
    if (!admin)
      return res.status(401).json({ message: "Unauthorized access" });
    else if (admin.teamNo !== 1 || !admin.adminKey)
      return res.status(401).json({ message: "Unauthorized access" });

    return res.status(200).json({uid:admin.uid},admin)
  } catch (e) {
    console.log(e["errorInfo"]);
    return res.json({
      message: e["errorInfo"]["message"] || "Internal server error",
    });
  }
}

module.exports = { checkIfAdmin };*/
