import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

axios.get(apiUrl)
.then(response => {
setData(response.data);
setLoading(false);
})
.catch(error => {
console.error('Error fetching data:', error);
setLoading(false);
});
}, []);

return(
<div>
{loading ? (
    <p>Loading...</p>
) : (
<div>
    <h1>Data from Server</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
)}
</div>
);
};

export default MyComponent;