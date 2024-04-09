const tablecontainer = document.getElementById("TableContainer");
tablecontainer.textContent = "";
var table = document.createElement("table");
table.classList.add("mt-4");
const btntop = document.getElementById("btntop");
var headerRow = document.createElement("tr");
headerRow.style.color = "#2B4E8E";
headerRow.style.backgroundColor = "#ECF9FF";

var headerCells = ["S.no", "Name", "Designation", "Affiliation", "Photograph"];
headerCells.forEach(function (cellText) {
  var th = document.createElement("th");
  th.textContent = cellText;
  headerRow.appendChild(th);
});

table.appendChild(headerRow);

var rowData = [
  ["xxx", "Dr. xxx", "xxx", "xxx"],
  ["xxx", "Dr. xxx", "xxx", "xxx"],
  ["xxx", "Dr. xxx", "xxx", "xxx"],
  ["xxx", "Dr. xxx", "xxx", "xxx"],
  ["xxx", "Dr. xxx", "xxx", "xxx"],
  ["xxx", "Dr. xxx", "xxx", "xxx"],
];

rowData.forEach(function (rowDataItem) {
  var row = document.createElement("tr");
  rowDataItem.forEach(function (cellData) {
    var td = document.createElement("td");
    td.textContent = cellData;
    row.appendChild(td);
  });
  var imgCell = document.createElement("td");
  var img = document.createElement("img");
  img.src =
    "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1712637115/836_nsfpuw.jpg";
  img.classList.add("photo");
  imgCell.appendChild(img);
  row.appendChild(imgCell);

  table.appendChild(row);
});

tablecontainer.appendChild(table);

function table1() {
  tablecontainer.textContent = "";
  var table = document.createElement("table");
  table.classList.add("mt-4");

  var headerRow = document.createElement("tr");
  headerRow.style.color = "#2B4E8E";
  headerRow.style.backgroundColor = "#ECF9FF";

  var tableTitle = document.getElementById("table-title");

  var headerCells = [
    "S.no",
    "Name",
    "Designation",
    "Affiliation",
    "Photograph",
  ];
  headerCells.forEach(function (cellText) {
    var th = document.createElement("th");
    th.textContent = cellText;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  var rowData = [
    ["xxx", "Dr. xxx", "xxx", "xxx"],
    ["xxx", "Dr. xxx", "xxx", "xxx"],
    ["xxx", "Dr. xxx", "xxx", "xxx"],
    ["xxx", "Dr. xxx", "xxx", "xxx"],
    ["xxx", "Dr. xxx", "xxx", "xxx"],
    ["xxx", "Dr. xxx", "xxx", "xxx"],
  ];

  rowData.forEach(function (rowDataItem) {
    var row = document.createElement("tr");
    rowDataItem.forEach(function (cellData) {
      var td = document.createElement("td");
      td.textContent = cellData;
      row.appendChild(td);
    });
    var imgCell = document.createElement("td");
    var img = document.createElement("img");
    img.src =
      "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1712637115/836_nsfpuw.jpg";
    img.classList.add("photo");
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    table.appendChild(row);
  });

  tablecontainer.appendChild(table);

  tableTitle.innerHTML = "Organizing Committee";
}

function table2() {
  tablecontainer.textContent = "";
  var table = document.createElement("table");
  table.classList.add("mt-4");

  var headerRow = document.createElement("tr");
  headerRow.style.color = "#2B4E8E";
  headerRow.style.backgroundColor = "#ECF9FF";

  var tableTitle = document.getElementById("table-title");

  var headerCells = [
    "S.no",
    "Name",
    "Designation",
    "Affiliation",
    "Photograph",
  ];
  headerCells.forEach(function (cellText) {
    var th = document.createElement("th");
    th.textContent = cellText;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  var rowData = [
    ["yyy", "Dr. yyy", "yyy", "yyy"],
    ["yyy", "Dr. yyy", "yyy", "yyy"],
    ["yyy", "Dr. yyy", "yyy", "yyy"],
    ["yyy", "Dr. yyy", "yyy", "yyy"],
    ["yyy", "Dr. yyy", "yyy", "yyy"],
    ["yyy", "Dr. yyy", "yyy", "yyy"],
  ];

  rowData.forEach(function (rowDataItem) {
    var row = document.createElement("tr");
    rowDataItem.forEach(function (cellData) {
      var td = document.createElement("td");
      td.textContent = cellData;
      row.appendChild(td);
    });
    var imgCell = document.createElement("td");
    var img = document.createElement("img");
    img.src =
      "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1712637115/836_nsfpuw.jpg";
    img.classList.add("photo");
    imgCell.appendChild(img);
    row.appendChild(imgCell);
    table.appendChild(row);
  });

  tablecontainer.appendChild(table);

  tableTitle.innerHTML = "International Co-ordinators";
}
