import "./App.css";
import { useState } from "react";

function App() {
  const categories = [
    "Overall",
    "Engineering",
    "Medical",
    "Management",
    "Architecture",
  ];

  const colleges = {
    Overall: [
      {
        name: "Indian Institute of Technology Madras",
        city: "Chennai",
        state: "Tamil Nadu",
      },
      {
        name: "Indian Institute of Science",
        city: "Bengaluru",
        state: "Karnataka",
      },
      {
        name: "Indian Institute of Technology Bombay",
        city: "Mumbai",
        state: "Maharashtra",
      },
      {
        name: "Indian Institute of Technology Delhi",
        city: "New Delhi",
        state: "Delhi",
      },
      {
        name: "Indian Institute of Technology Kanpur",
        city: "Kanpur",
        state: "Uttar Pradesh",
      },
      {
        name: "Indian Institute of Technology Kharagpur",
        city: "Kharagpur",
        state: "West Bengal",
      },
      {
        name: "Indian Institute of Technology Roorkee",
        city: "Roorkee",
        state: "Uttarakhand",
      },
      {
        name: "Indian Institute of Technology Guwahati",
        city: "Guwahati",
        state: "Assam",
      },
      {
        name: "Jawaharlal Nehru University",
        city: "New Delhi",
        state: "Delhi",
      },
      {
        name: "Banaras Hindu University",
        city: "Varanasi",
        state: "Uttar Pradesh",
      },
    ],
    Engineering: [
      {
        name: "Indian Institute of Technology Madras",
        city: "Chennai",
        state: "Tamil Nadu",
      },
      {
        name: "Indian Institute of Technology Delhi",
        city: "New Delhi",
        state: "Delhi",
      },
      {
        name: "Indian Institute of Technology Bombay",
        city: "Mumbai",
        state: "Maharashtra",
      },
      {
        name: "Indian Institute of Technology Kanpur",
        city: "Kanpur",
        state: "Uttar Pradesh",
      },
      {
        name: "Indian Institute of Technology Kharagpur",
        city: "Kharagpur",
        state: "West Bengal",
      },
      {
        name: "Indian Institute of Technology Roorkee",
        city: "Roorkee",
        state: "Uttarakhand",
      },
      {
        name: "Indian Institute of Technology Guwahati",
        city: "Guwahati",
        state: "Assam",
      },
      {
        name: "Indian Institute of Technology Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
      },
      {
        name: "National Institute of Technology Tiruchirappalli",
        city: "Tiruchirappalli",
        state: "Tamil Nadu",
      },
      {
        name: "National Institute of Technology Karnataka",
        city: "Surathkal",
        state: "Karnataka",
      },
    ],
    Medical: [
      {
        name: "All India Institute of Medical Sciences",
        city: "New Delhi",
        state: "Delhi",
      },
      {
        name: "Post Graduate Institute of Medical Education and Research",
        city: "Chandigarh",
        state: "Chandigarh",
      },
      {
        name: "Christian Medical College",
        city: "Vellore",
        state: "Tamil Nadu",
      },
      {
        name: "National Institute of Mental Health & Neuro Sciences, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
      },
      {
        name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences",
        city: "Lucknow",
        state: "Uttar Pradesh",
      },
      {
        name: "Amrita Vishwa Vidyapeetham",
        city: "Coimbatore",
        state: "Tamil Nadu",
      },
      {
        name: "Banaras Hindu University",
        city: "Varanasi",
        state: "Uttar Pradesh",
      },
      {
        name: "Jawaharlal Institute of Post Graduate Medical Education & Research",
        city: "Puducherry",
        state: "Pondicherry",
      },
      {
        name: "King George`s Medical University",
        city: "Lucknow",
        state: "Uttar Pradesh",
      },
      {
        name: "Kasturba Medical College, Manipal",
        city: "Manipal",
        state: "Karnataka",
      },
    ],
    Management: [
      {
        name: "Indian Institute of Management Ahmedabad",
        city: "Ahmedabad",
        state: "Gujarat",
      },
      {
        name: "Indian Institute of Management Bangalore",
        city: "Bengaluru",
        state: "Karnataka",
      },
      {
        name: "Indian Institute of Management Calcutta",
        city: "Kolkata",
        state: "West Bengal",
      },
      {
        name: "Indian Institute of Management Kozhikode",
        city: "Kozhikode",
        state: "Kerala",
      },
      {
        name: "Indian Institute of Technology Delhi",
        city: "New Delhi",
        state: "Delhi",
      },
      {
        name: "Indian Institute of Management Indore",
        city: "Indore",
        state: "Madhya Pradesh",
      },
      {
        name: "Indian Institute of Management Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
      },
      {
        name: "Xavier Labour Relations Institute (XLRI)",
        city: "Jamshedpur",
        state: "Jharkhand",
      },
      {
        name: "Indian Institute of Technology Kharagpur",
        city: "Kharagpur",
        state: "West Bengal",
      },
      {
        name: "Indian Institute of Technology Bombay",
        city: "Mumbai",
        state: "Maharashtra",
      },
    ],
    Architecture: [
      {
        name: "Indian Institute of Technology Roorkee",
        city: "Roorkee",
        state: "Uttarakhand",
      },
      {
        name: "National Institute of Technology Calicut",
        city: "Kozhikode",
        state: "Kerala",
      },
      {
        name: "Indian Institute of Technology Kharagpur",
        city: "Kharagpur",
        state: "West Bengal",
      },
      {
        name: "School of Planning and Architecture, New Delhi",
        city: "New Delhi",
        state: "Delhi",
      },
      {
        name: "Centre for Environmental Planning and Technology University",
        city: "Ahmedabad",
        state: "Gujarat",
      },
      {
        name: "School of Planning and Architecture Bhopal",
        city: "Bhopal",
        state: "Madhya Pradesh",
      },
      {
        name: "National Institute of Technology Tiruchirappalli",
        city: "Tiruchirappalli",
        state: "Tamil Nadu",
      },
      {
        name: "School of Planning & Architecture",
        city: "Vijayawada",
        state: "Andhra Pradesh",
      },
      {
        name: "Indian Institute of Engineering Science and Technology",
        city: "Shibpur",
        state: "West Bengal",
      },
      {
        name: "Jamia Millia Islamia",
        city: "New Delhi",
        state: "Delhi",
      },
    ],
  };

  // CODE USED FOR FETCHING COLLEGES FROM NIRF TABLE
  // var oTable = document.getElementById('tbl_overall');

  // var ans = [];

  //loops through rows
  //   for (var i = 1; i < 11; i++) {

  //     var oCells = oTable.rows.item(i).cells;

  //     var name = oCells.item(1).innerText;
  //     var city = oCells.item(2).innerText;
  //     var state = oCells.item(3).innerText;
  //     ans.push({
  //         name:name,
  //         city:city,
  //         state:state
  //         });
  //   }
  // console.log(ans);

  const [categorySelect, setcategorySelect] = useState("Overall");

  function handleCategoryClick(category) {
    setcategorySelect(category);
  }

  function googleSearch(college) {
    window.open("http://google.com/search?q=" + college);
  }

  return (
    <div className="App">
      <header className="App-header">Ranking colleges</header>
      <h4>View the best colleges in India based on NIRF ranking</h4>
      <div className="category-list">
        {categories.map(function (category) {
          return (
            <button
              className="category-btn"
              id={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <h4>{categorySelect} top 10 colleges</h4>
      <div className="container">
        <ol className="ol-college-list">
          {colleges[categorySelect].map(function (college, index) {
            return (
              <li
                className="li-college-name"
                onClick={() => googleSearch(college.name)}
              >
                {index + 1}. {college.name}, {college.city}, {college.state}
              </li>
            );
          })}
        </ol>
      </div>
      <p>
        Source{" "}
        <a
          href="https://www.nirfindia.org/2021/Ranking.html"
          target="_blank"
          id="source"
          rel="noreferrer"
        >
          NIRF Rankings
        </a>
      </p>
    </div>
  );
}

export default App;
