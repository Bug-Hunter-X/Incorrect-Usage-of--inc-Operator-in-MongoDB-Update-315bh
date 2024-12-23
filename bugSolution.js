```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65312f272e36f645a9f64150")}, {"$inc": {"counter": 1}});
```