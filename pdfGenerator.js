const PDFDocument = require("pdfkit");
const fs = require("fs");

const studentsDetail = [
  { student_name: "Sathish", house: "Tiger" },
  { student_name: "Pradeep", house: "Lion" }
];

const pdfArr = [];

studentsDetail.forEach(s => {
  let p = new PDFDocument();
  p.pipe(fs.createWriteStream(`${s.student_name}.pdf`));
  p.fontSize(25).text(
    `Hello ${s.student_name} your house is ${s.house}`,
    100,
    100
  );
  p.end();

  pdfArr.push(p);
});
