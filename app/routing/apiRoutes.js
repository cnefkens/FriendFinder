var friendsData = require('../data/friends');


module.exports = function (app) {

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	})


	app.post('/api/friends', function(req, res){
		var newFriend = req.body;

		for(var i = 0; i < newFriend.scores.length; i++) {
	
				newFriend.scores[i] = parseInt(newFriend.scores[i]);
		}

		var arrDiffScores = [];

		for(var i = 0; i < friendsData.length; i++) {

			var comparedFriend = friendsData[i];
			var totalDifference = 0;
			
			for(var k = 0; k < comparedFriend.scores.length; k++) {
				var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
				totalDifference += differenceOneScore;
			}

			arrDiffScores[i] = totalDifference;
		}

		var bestFriendNum = arrDiffScores[0];
		var bestFriendIndex = 0;

		for(var i = 1; i < arrDiffScores.length; i++) {
			if(arrDiffScores[i] < bestFriendNum) {
				bestFriendNum = arrDiffScores[i];
				bestFriendIndex = i;
			}
		}

		friendsData.push(newFriend);

		res.json(friendsData[bestFriendIndex]);
	})
}