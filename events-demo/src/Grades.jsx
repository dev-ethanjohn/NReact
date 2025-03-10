// 2. Create a Grades.jsx file that has a component
//    that returns a <table /> element

// 3. Add three columns to the table: "Subject",
//    "Mark" and "Grade" where Subject is a school
//    subject (Eg. Math), Mark is a number between
//    0-100 and Grade is a letter-grade (Eg: A, B)

// 3. Add some table data to this table so you have
//    at least 5 rows to fill in the columns

// 4. How would you make it so that when you CLICK any
//    of the table data cells, it logs out the text inside?
//    NOTE: Event delegation is your friend here!

//        Example:

// Subject   |   Mark   |   Grade
// --------------------------------
// Math      |   65     |   C
// Science   |   77     |   B
// Art       |   92     |   A+

function Grades() {
  function handleClick(e) {
    console.log(e.target.textContent);
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Subject</td>
          <td>Mark</td>
          <td>Grade</td>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
        <tr>
          <td>Math</td>
          <td>74</td>
          <td>B +</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>72</td>
          <td>C+</td>
        </tr>
        <tr>
          <td>Art</td>
          <td>90</td>
          <td>A +</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Grades;
