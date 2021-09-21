import './App.css';
import { useState } from "react";

function App() {
  const categories = ["Overall", "Engineering", "Medical", "Management", "Architecture"]

  const colleges = {
    "Overall": ["Indian Institute of Technology Madras", "Indian Institute of Science", "Indian Institute of Technology Bombay", "Indian Institute of Technology Delhi", "Indian Institute of Technology Kanpur", "Indian Institute of Technology Kharagpur", "Indian Institute of Technology Roorkee", "Indian Institute of Technology Guwahati", "Jawaharlal Nehru University", "Banaras Hindu University"],
    "Engineering": ["Indian Institute of Technology Madras", "Indian Institute of Technology Delhi", "Indian Institute of Technology Bombay", "Indian Institute of Technology Kanpur", "Indian Institute of Technology Kharagpur", "Indian Institute of Technology Roorkee", "Indian Institute of Technology Guwahati", "Indian Institute of Technology Hyderabad", "National Institute of Technology Tiruchirappalli", "National Institute of Technology Karnataka"],
    "Medical": ["All India Institute of Medical Sciences", "Post Graduate Institute of Medical Education and Research", "Christian Medical College", "National Institute of Mental Health & Neuro Sciences, Bangalore", "Sanjay Gandhi Postgraduate Institute of Medical Sciences", "Amrita Vishwa Vidyapeetham", "Banaras Hindu University", "Jawaharlal Institute of Post Graduate Medical Education & Research", "King George`s Medical University", "Kasturba Medical College, Manipal"],
    "Management": ["Indian Institute of Management Ahmedabad", "Indian Institute of Management Bangalore", "Indian Institute of Management Calcutta", "Indian Institute of Management Kozhikode", "Indian Institute of Technology Delhi", "Indian Institute of Management Indore", "Indian Institute of Management Lucknow", "Xavier Labour Relations Institute (XLRI)", "Indian Institute of Technology Kharagpur", "Indian Institute of Technology Bombay"],
    "Architecture": ["Indian Institute of Technology Roorkee", "National Institute of Technology Calicut", "Indian Institute of Technology Kharagpur", "School of Planning and Architecture, New Delhi", "Centre for Environmental Planning and Technology University", "School of Planning and Architecture Bhopal", "National Institute of Technology Tiruchirappalli", "School of Planning & Architecture", "Indian Institute of Engineering Science and Technology", "Jamia Millia Islamia"]
  }
  // CODE USED FOR FETCHING COLLEGES FROM NIRF TABLE
  // var oTable = document.getElementById('tbl_overall');

  // var ans = [];

  // //loops through rows    
  // for (var i = 1; i < 11; i++) {

  //   var oCells = oTable.rows.item(i).cells;

  //   var cellVal = oCells.item(1).innerText;
  //   ans.push(cellVal);
  // }


  const [categorySelect, setcategorySelect] = useState("Overall");

  function handleCategoryClick(category) {
    setcategorySelect(category);
  }

  function googleSearch(college) {
    window.open('http://google.com/search?q=' + college);
  }

  return (
    <div className="App">
      <header className="App-header">
        Ranking colleges
      </header>
      <h4>View the best colleges in India based on NIRF ranking</h4>
      <div className="category-list">
        {categories.map(function (category) {
          return <button className="category-btn" id={category} onClick={() => handleCategoryClick(category)}>{category}</button>
        }
        )}
      </div>
      <h4>{categorySelect} top 10 colleges</h4>
      <div className="container">
        <ol className="ol-college-list">
          {colleges[categorySelect].map(function (college, index) {
            return <li className="li-college-name" onClick={() => googleSearch(college)}>{index + 1}. {college}</li>;
          }
          )}
        </ol>
      </div>
      <p>Source <a href="https://www.nirfindia.org/2021/Ranking.html" target="_blank" id="source" rel="noreferrer">NIRF Rankings</a></p>
    </div>
  );
}

export default App;
