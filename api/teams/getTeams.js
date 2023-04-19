
module.exports = async function (req, res, db) {
   let teams = await db.collection("teams").find({}).toArray();
   console.log();
  res.json(teams);
};
