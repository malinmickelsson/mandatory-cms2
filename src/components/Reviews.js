import React, { useState, useEffect } from "react";
import axios from "axios";

// D ----------------------------------------------------------------------------------
const Reviews = (props) => {
	const [Reviews, SetReviews] = useState(null);

	useEffect(() => {
			axios.get(`http://192.168.99.102:8080/api/collections/get/Reviews`)
					.then((res) => SetReviews(res.data.entries));

	}, [props.match.params.id]);
	console.log("my reviews : " + JSON.stringify(Reviews));
	
	return (
		
			<div>
					<span>testing</span>
			</div>
		
	)
}
export default Reviews
//-------------------------------------------------------------------------------------
// M
/*
const Reviews = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://http://192.168.99.102:8080/api/collections/get/Reviews") // 404?
      .then(res => {
        console.log("res.data.entries: " + res.data.entries); // loggar inte alls??
        setResult(res.data.entries);
      })
      .catch(function(error) {
        console.log("Error fetching the api - No reviews found");
      });
  }, []);

  console.log("logged results: " + results);

  return (
    <body>
      <div>
        {results.map(result => (
          <section key={result._id}>
            <div className="reviews">
              <h2>{result.title}</h2>
              <p>{result.body}</p>
              <p>{result.rating}</p>

              <hr></hr>
            </div>
          </section>
        ))}
      </div>
    </body>
  );
};
export default Reviews;
*/