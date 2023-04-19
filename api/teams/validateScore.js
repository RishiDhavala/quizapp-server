module.exports = async function (uid, db) {
 // console.log(uid,db,uid.length);
  if (!uid || !db || uid.length == 0) {
    return;
  }
  let finalScore = 0;
  let team = await db.collection("teams").findOne({ uid: uid });
 // console.log(team);
  if (team == null) {
    console.log("team not found")
    return 0;
  }
  let unlockedClues = team.unlockedClues;
  //console.log(unlockedClues);
  for ( i=0;i<unlockedClues.length;i++) {
    //console.log(unlockedClues[i].score);
    finalScore += unlockedClues[i].score;
  }
 // console.log(finalScore);
  await db
    .collection("teams")
    .updateOne({ uid: uid }, { $set: { score: finalScore } });
  return finalScore;
};
