// ==UserScript==
// @name 标记答案 安全知识问答
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @namespace Violentmonkey Scripts
// @match   https://exam.jxeduyun.com/*
// @grant none
// ==/UserScript==
var my = document.createElement("divCell");
document.body.appendChild(my); 
my.innerHTML='<div  style="position:fixed ; bottom:0px;width:1002" lign="left" id="bg">   <input type="button" name="tijiao" id="tijiao" value="显示答案" /><input type="button" name="zddt" id="zddt" value="自动答题" /></div>';
var s="";
var k=0;
var  answers;  var cid;
var j=0;
var questions="1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,1756,1757,1758,1759,1760,1761,1762,1763,1764,1765,1766,1767,1768,1769,1770,1771,1772,1773,1774,1775,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1806,1807,1808,1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,1853,1854,1855,1856,1857,1858,1859,1860,1861";
var answerss="A,A,B,D,C,D,C,D,B,C,D,A,A,B,D,B,C,A,D,B,B,D,A,D,A,B,C,C,B,C,B,B,C,A,B,A,A,D,D,D,D,A,B,B,B,A,A,A,A,B,A,A,B,A,A,A,A,A,A,A,A,A,B,A,C,C,B,B,B,A,B,B,B,B,B,A,A,C,A,A,A,A,A,A,A,B,A,B,A,C,D,B,A,B,A,B,B,B,A,B,D,A,B,A,B,D,A,D,B,B,D,C,B,C,C,D,A,A,C,C,D,A,D,B,D,A,B,A,B,A,B,B,A,B,C,C,B,C,B,A,B,A,A,A,C,B,D,C,D,A,B,A,B,A,B,C,D,D,B,D,A,B,B,A,A,A,C,D,D,B,B,A,D,B,A,A,C,D,B,A,B,A,B,D,B,D,A,B,C,D,A,B,C,A,A,B,A,B,D,A,C,D,A,B,C,B,D,D,C,D,A,B,A,B,A,C,D,A,B,D,A,D,A,A,A,D,C,D,A,B,B,C,D,C,B,C,D,A,B,A,D,A,B,B,C,A,C,C,A,B,B,B,D,D,A,A,D,A,B,C,A,C,D,A,A,B,D,D,A,C,B,C,B,B,A,C,A,B,A,D,D,D,D,A,A,B,B,A,A,B,B,A,A,A,A,A,A,A,A,A,B,A,C,A,A,B,B,A,A,A,A,A,A,A,A,B,B,A,A,A,B,B,A,B,A,A,D,A,D,B,B,D,C,B,C,D,C,A,A,C,B,C,D,B,C,C,B,C,D,A,B,B,A,A,B,C,D,B,B,C,A,B,A,A,B,D,B,C,D,A,B,C,A,A,C,D,B,B,D,A,A,A,B,B,C,A,D,C,A,A,B,A,B,D,A,B,C,A,A,B,A,B,A,D,C,D,A,B,A,D,A,B,A,D,A,C,A,B,A,D,C,D,A,B,B,A,C,D,A,B,A,D,B,C,D,B,C,C,A,A,B,D,B,C,B,A,A,C,D,D,A,B,A,D,C,D,B,B,B,A,D,B,C,C,A,C,A,A,D,B,A,A,C,B,C,B,A,C,A,B,A,D,D,D,D,A,A,B,B,A,A,B,B,A,A,A,A,A,A,A,A,A,B,A,C,A,A,B,B,B,A,A,A,A,A,A,A,A,B,B,A,A,A,B,B,A,B,A,A,D,A,D,B,B,D,C,B,C,D,C,A,C,D,B,C,A,B,A,B,C,B,C,D,D,D,A,A,C,D,A,B,B,B,A,B,A,D,A,C,C,A,A,A,A,B,A,A,C,A,D,C,D,C,D,A,B,A,B,D,D,D,B,D,C,C,D,C,D,A,B,B,B,C,B,A,A,B,C,A,B,D,D,A,B,D,B,C,D,A,B,A,B,C,C,B,B,C,B,B,A,C,A,B,A,D,D,D,D,A,A,B,B,A,A,B,B,A,A,A,A,A,A,A,A,A,B,A,C,A,A,B,B,A,A,A,A,A,A,A,A,B,B,A,A,A,B,B,A,B,A,A,D,A,D,B,B,D,C,B,C,D,C,D,A,B,D,C,D,B,A,B,C,D,C,D,B,A,B,C,A,C,B,A,D,B,B,A,D,A,B,D,D,A,B,C,D,B,A,D,A,A,B,B,A,D,D,C,D,B,A,A,D,D,D,A,B,A,A,A,A,D,C,A,D,A,C,C,A,D,C,A,A,B,A,D,A,C,D,B,A,B,B,B,D,D,A,A,B,A,C,B,A,B,D,A,B,A,B,B,A,B,B,B,C,B,C,B,B,A,C,A,B,A,D,D,D,D,A,A,B,B,A,A,B,B,A,A,A,A,A,A,A,A,A,B,A,C,A,A,B,B,A,A,A,A,A,A,A,A,B,B,A,A,A,B,B,A,B,A,A,D,A,D,B,B,D,C,B,C,D,C";

function fireKeyEvent(el, evtType, keyCode) {      
  var evtObj;                                       
  if (document.createEvent) {                 
    if (window.KeyEvent) {//firefox 浏览器下模拟事件 
      evtObj = document.createEvent('KeyEvents');  
      evtObj.initKeyEvent(evtType, true, true, window, true, false, false, false, keyCode, 0);    
    } else {//chrome 浏览器下模拟事件 
      evtObj = document.createEvent('UIEvents'); 
      evtObj.initUIEvent(evtType, true, true, window, 1);    
      delete evtObj.keyCode;     
      if (typeof evtObj.keyCode === "undefined") {//为了模拟keycode
        Object.defineProperty(evtObj, "keyCode",
                              { value: keyCode });    
      } else {               
        evtObj.key = String.fromCharCode(keyCode);  
      }                     
      if (typeof evtObj.ctrlKey === 'undefined') {//为了模拟ctrl键
        Object.defineProperty(evtObj, "ctrlKey",
                              { value: true });       
      } else {          
        evtObj.ctrlKey = true;     
      }               
    }               
    el.dispatchEvent(evtObj);    
  } else if (document.createEventObject) {//IE 浏览器下模拟事件
    evtObj = document.createEventObject();     
    evtObj.keyCode = keyCode     
    el.fireEvent('on' + evtType, evtObj);      
  }      
}              

$("#tijiao").click(function(){  
cid=questions.split(",");  
answers=answerss.split(",");  
var inputs=$("body").find('input');  
for(i=0;i<inputs.length;i++){  
for(j=0;j<cid.length;j++){  
var flag= (inputs[i].id).indexOf(cid[j],0);  
if((flag>-1)&&(inputs[i].value==answers[j])){  
$(inputs[i]).parent().css("background-color","yellow");  
//console.log($(inputs[i]).click())  
//inputs[i].parentNode.className += ' checked'  
//inputs[i].parentNode.parentNode.click;  
  //trigger事件触发 模拟鼠标点击  
    var label = $("body").find('input')[i].parentNode.parentNode.children[1];   
   $(label).trigger("click");  
}  
}  
}  
});  

$("#zddt").click(function(){
  
  $("#id_card").val("362321198404154099");
  $("#id_submit").trigger("click");
  //$("#organizationCode").focus();
  $("#organizationCode").val("3136010142").trigger('change');
;
  var testPassword = "3136019142";      
var tp;       
var cCode;        

var testss = document.getElementById("organizationCode");       
testss.value="gghhh";
  for(var i=0;i<testPassword.length;i++)  
 
{        
 cCode = testPassword.charCodeAt(i);            
 fireKeyEvent(testss, "keydown", cCode);             
  fireKeyEvent(testss, "keypress", cCode);      
fireKeyEvent(testss, "keyup", cCode);       
     
 }  

 
});    

