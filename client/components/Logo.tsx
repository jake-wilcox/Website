import React, { useState } from "react";
import { motion, useAnimation } from 'framer-motion'
import useRandomInterval from "../hooks/useRandomInterval";

const Logo = () => {


    const controlls1 = useAnimation()
    const controlls2 = useAnimation()
    const controlls3 = useAnimation()
    const controlls4 = useAnimation()
    const controlls5 = useAnimation()
    const controlls6 = useAnimation()
    const controlls7 = useAnimation()
    const controlls8 = useAnimation()
    const controlls9 = useAnimation()
    const controlls10 = useAnimation()
    const controlls11 = useAnimation()
    const controllList = [controlls1, controlls2, controlls3, controlls4, controlls5, controlls6, controlls7, controlls8, controlls9, controlls10, controlls11]

    const pathAnimation = {
            
            opacity: 1,
            pathLength: [0,1,0],
            pathOffset: [0, 1],
            transition: {
                
                duration: 2,
                ease: "easeInOut",
                repeateType: 'mirror'
            },
        
        
    }

    const animateAccent = async () => {
        var indx = Math.floor(Math.random() * (11 - 0)) + 0

        console.log(indx)
        await controllList[indx].start(pathAnimation)


    }

    useRandomInterval(() => animateAccent(), 300, 2000 )

    






    return(
<svg height="90%" stroke-miterlimit="10" version="1.1" viewBox="0 0 2048 2048" width="90%"  xmlns="http://www.w3.org/2000/svg" >
<defs/>
<g id="Signature">
<path d="M1294.74 66.6594C1282.71 69.4508 1269.67 73.9867 1255.64 80.2672C1241.6 86.5477 1186.12 118.997 1089.19 177.615C992.272 236.233 924.091 278.801 884.653 305.318C845.216 331.836 822.155 346.49 815.47 349.282C808.786 352.073 765.672 381.033 686.128 436.162C606.584 491.291 564.807 519.553 560.796 520.949C556.785 522.344 536.064 536.65 498.632 563.865C461.199 591.081 440.478 605.386 436.467 606.782C432.456 608.178 416.748 619.343 389.342 640.278C361.936 661.213 319.825 691.22 263.008 730.299C206.191 769.377 169.427 795.546 152.716 808.805C136.005 822.064 117.957 839.16 98.5725 860.095C79.1879 881.03 68.4929 894.289 66.4876 899.872C64.4823 905.455 63.8138 912.782 64.4823 921.854C65.1507 930.926 69.4955 941.742 77.5168 954.303C85.538 966.864 97.2356 977.331 112.61 985.705C127.984 994.079 149.374 1000.36 176.78 1004.55C204.185 1008.73 234.265 1010.48 267.018 1009.78C299.772 1009.08 332.859 1006.64 366.281 1002.45C399.703 998.266 452.175 989.543 523.698 976.285C595.221 963.026 651.369 953.954 692.144 949.069C732.918 944.184 766.34 936.857 792.409 927.087C818.478 917.318 833.184 910.688 836.526 907.199C839.868 903.71 841.539 900.221 841.539 896.732C841.539 894.987 841.539 893.243 841.539 891.498C838.197 891.498 834.855 891.498 831.513 891.498C824.828 891.498 813.465 893.94 797.422 898.825C781.38 903.71 748.627 907.897 699.162 911.386C649.698 914.875 578.844 923.249 486.6 936.508C394.355 949.767 322.833 956.047 272.032 955.35C221.231 954.652 184.801 951.512 162.742 945.929C140.684 940.346 127.315 934.764 122.636 929.181C117.957 923.598 122.636 913.48 136.673 898.825C150.711 884.171 171.432 866.376 198.838 845.441C226.244 824.506 307.125 767.633 441.48 674.821C575.836 582.009 649.03 532.463 661.061 526.182C673.093 519.902 685.459 511.877 698.16 502.107C710.86 492.338 749.963 466.518 815.47 424.648C880.977 382.778 965.868 330.789 1070.14 268.682C1174.42 206.575 1228.9 174.824 1233.58 173.428C1235.92 172.73 1238.26 172.032 1240.6 171.334C1222.21 207.273 1203.83 243.211 1185.45 279.15C1148.69 351.026 1129.3 390.803 1127.3 398.479C1125.29 406.155 1115.26 429.881 1097.22 469.658C1079.17 509.434 1039.73 610.62 978.903 773.215C918.075 935.81 873.29 1029.67 844.547 1054.79C815.804 1079.91 796.754 1097.71 787.396 1108.18C778.038 1118.64 769.682 1126.32 762.33 1131.2C754.977 1136.09 739.268 1150.74 715.205 1175.17C691.141 1199.59 677.104 1212.85 673.093 1214.94C669.083 1217.04 638 1247.39 579.846 1306.01C521.693 1364.63 473.899 1415.57 436.467 1458.84C399.035 1502.1 375.973 1530.36 367.284 1543.62C358.594 1556.88 353.247 1563.86 351.241 1564.56C349.236 1565.26 334.53 1586.54 307.125 1628.41C279.719 1670.28 258.997 1705.52 244.96 1734.13C230.923 1762.74 221.565 1783.68 216.886 1796.94C212.207 1810.19 208.864 1822.41 206.859 1833.57C204.854 1844.74 204.52 1860.44 205.856 1880.68C207.193 1900.91 210.87 1916.61 216.886 1927.78C222.902 1938.95 229.586 1947.67 236.939 1953.95C244.292 1960.23 249.639 1964.07 252.981 1965.46C256.323 1966.86 264.679 1966.86 278.048 1965.46C291.416 1964.07 305.119 1959.88 319.156 1952.9C333.194 1945.92 348.568 1936.5 365.279 1924.64C381.989 1912.78 402.711 1895.68 427.443 1873.35C452.175 1851.02 473.899 1830.08 492.616 1810.54C511.332 1791 537.735 1760.3 571.825 1718.43C605.915 1676.56 636.998 1635.39 665.072 1594.91C693.146 1554.44 707.518 1532.46 708.186 1528.97C708.855 1525.48 714.871 1515.36 726.234 1498.61C737.597 1481.86 750.298 1460.93 764.335 1435.81C778.372 1410.69 799.094 1370.21 826.499 1314.38C853.905 1258.56 878.972 1202.73 901.698 1146.9C924.425 1091.08 966.871 1035.95 1029.04 981.518C1091.2 927.087 1125.62 896.034 1132.31 888.358C1138.99 880.682 1145.34 875.099 1151.36 871.61C1157.38 868.121 1175.09 852.768 1204.5 825.553C1233.91 798.337 1251.29 783.334 1256.64 780.543C1261.99 777.751 1270.68 770.424 1282.71 758.561C1294.74 746.698 1311.78 732.043 1333.84 714.597C1355.9 697.151 1395 663.307 1451.15 613.063C1507.3 562.819 1549.41 526.182 1577.49 503.154C1605.56 480.125 1621.94 465.82 1626.62 460.237C1631.3 454.655 1639.65 447.676 1651.68 439.302C1663.72 430.928 1684.1 414.18 1712.85 389.058C1741.59 363.936 1755.96 350.329 1755.96 348.235C1755.96 347.188 1755.96 346.142 1755.96 345.095C1754.29 345.095 1752.62 345.095 1750.95 345.095C1747.6 345.095 1741.92 347.537 1733.9 352.422C1725.88 357.307 1717.52 363.238 1708.84 370.217C1700.15 377.195 1671.4 395.688 1622.61 425.694C1573.81 455.701 1523.68 488.848 1472.21 525.136C1420.74 561.423 1380.63 590.732 1351.89 613.063C1323.15 635.393 1300.09 654.584 1282.71 670.634C1265.33 686.684 1255.64 694.709 1253.63 694.709C1251.62 694.709 1247.28 697.5 1240.6 703.083C1233.91 708.666 1225.89 716.342 1216.53 726.112C1207.17 735.881 1191.8 749.14 1170.41 765.888C1149.02 782.636 1135.65 794.15 1130.3 800.431C1124.96 806.711 1099.89 829.042 1055.1 867.423C1032.71 886.613 1010.32 905.804 987.927 924.994C995.948 904.408 1003.97 883.822 1011.99 863.236C1028.03 822.064 1038.39 793.452 1043.07 777.402C1047.75 761.352 1067.8 708.666 1103.23 619.343C1138.66 530.02 1165.06 467.564 1182.44 431.975C1199.82 396.385 1209.18 375.799 1210.52 370.217C1211.85 364.634 1232.91 323.811 1273.68 247.747C1314.46 171.683 1336.52 128.069 1339.86 116.903C1343.2 105.738 1344.87 96.6662 1344.87 89.6879C1344.87 82.7096 1343.87 77.8248 1341.86 75.0334C1339.86 72.2421 1334.51 69.4508 1325.82 66.6594C1317.13 63.8681 1306.77 63.8681 1294.74 66.6594ZM1892.32 934.415C1846.87 953.256 1796.73 981.867 1741.92 1020.25C1687.11 1058.63 1651.02 1082.7 1633.64 1092.47C1616.26 1102.24 1600.21 1109.57 1585.51 1114.46C1570.8 1119.34 1560.11 1121.43 1553.42 1120.74C1546.74 1120.04 1541.73 1117.94 1538.38 1114.46C1536.71 1112.71 1535.04 1110.97 1533.37 1109.22C1541.39 1104.69 1549.41 1100.15 1557.43 1095.61C1573.48 1086.54 1584.51 1078.17 1590.52 1070.49C1596.54 1062.82 1601.55 1054.09 1605.56 1044.32C1609.57 1034.55 1611.24 1025.13 1610.57 1016.06C1609.91 1006.99 1608.24 1000.71 1605.56 997.22C1602.89 993.73 1598.54 990.241 1592.53 986.752C1586.51 983.263 1576.82 981.867 1563.45 982.565C1550.08 983.263 1539.05 987.101 1530.36 994.079C1521.67 1001.06 1513.65 1011.53 1506.3 1025.48C1498.95 1039.44 1494.6 1052.35 1493.26 1064.21C1491.93 1076.07 1481.9 1083.75 1463.18 1087.24C1444.47 1090.73 1430.77 1092.47 1422.08 1092.47C1413.39 1092.47 1404.7 1091.08 1396.01 1088.29C1391.66 1086.89 1387.32 1085.5 1382.97 1084.1C1389.32 1075.03 1395.67 1065.96 1402.02 1056.88C1414.72 1038.74 1425.42 1025.13 1434.11 1016.06C1442.8 1006.99 1451.49 999.313 1460.18 993.033C1468.87 986.752 1474.88 980.472 1478.22 974.191C1481.57 967.911 1483.24 962.677 1483.24 958.49C1483.24 954.303 1482.24 951.163 1480.23 949.069C1478.22 946.976 1472.21 946.627 1462.18 948.022C1452.16 949.418 1437.12 958.49 1417.06 975.238C1397.01 991.986 1380.3 1008.73 1366.93 1025.48C1353.56 1042.23 1346.54 1055.14 1345.87 1064.21C1345.21 1073.28 1344.2 1078.52 1342.87 1079.91C1342.2 1080.61 1341.53 1081.31 1340.86 1082.01C1340.53 1070.49 1340.19 1058.98 1339.86 1047.46C1339.19 1024.44 1341.53 998.615 1346.88 970.004C1352.22 941.393 1354.9 926.041 1354.9 923.947C1354.9 921.854 1352.89 919.411 1348.88 916.62C1344.87 913.829 1338.52 913.48 1329.83 915.573C1321.14 917.667 1310.45 931.972 1297.75 958.49C1285.05 985.008 1274.35 1004.9 1265.66 1018.15C1256.97 1031.41 1247.28 1043.28 1236.58 1053.74C1225.89 1064.21 1219.87 1069.45 1218.54 1069.45C1217.2 1069.45 1215.19 1065.96 1212.52 1058.98C1209.85 1052 1207.51 1033.51 1205.5 1003.5C1203.5 973.493 1200.82 957.094 1197.48 954.303C1194.14 951.512 1188.46 950.116 1180.44 950.116C1172.42 950.116 1167.07 948.371 1164.39 944.882C1161.72 941.393 1157.71 938.253 1152.36 935.461C1147.01 932.67 1140 930.926 1131.31 930.228C1122.62 929.53 1115.6 929.879 1110.25 931.274C1104.9 932.67 1098.89 935.81 1092.2 940.695C1085.52 945.58 1078.83 953.954 1072.15 965.817C1065.47 977.68 1060.79 989.195 1058.11 1000.36C1055.44 1011.53 1054.1 1024.44 1054.1 1039.09C1054.1 1053.74 1056.44 1067.7 1061.12 1080.96C1065.8 1094.22 1071.48 1103.99 1078.17 1110.27C1084.85 1116.55 1092.2 1120.04 1100.22 1120.74C1108.25 1121.43 1114.6 1120.74 1119.27 1118.64C1123.95 1116.55 1129.3 1113.06 1135.32 1108.18C1141.33 1103.29 1148.02 1094.57 1155.37 1082.01C1162.72 1069.45 1167.07 1063.16 1168.4 1063.16C1169.74 1063.16 1172.75 1069.79 1177.43 1083.05C1182.11 1096.31 1188.12 1106.43 1195.48 1113.41C1202.83 1120.39 1209.85 1123.88 1216.53 1123.88C1223.22 1123.88 1230.23 1121.78 1237.59 1117.6C1244.94 1113.41 1252.29 1107.48 1259.65 1099.8C1267 1092.12 1276.02 1079.91 1286.72 1063.16C1292.07 1054.79 1297.41 1046.42 1302.76 1038.04C1303.76 1048.51 1304.77 1058.98 1305.77 1069.45C1307.77 1090.38 1310.78 1105.03 1314.79 1113.41C1318.8 1121.78 1322.48 1127.02 1325.82 1129.11C1329.16 1131.2 1334.18 1131.9 1340.86 1131.2C1347.55 1130.51 1352.89 1127.71 1356.9 1122.83C1360.91 1117.94 1369.94 1117.94 1383.98 1122.83C1398.01 1127.71 1414.39 1129.81 1433.11 1129.11C1451.82 1128.41 1467.53 1126.67 1480.23 1123.88C1492.93 1121.08 1500.95 1123.18 1504.29 1130.16C1507.64 1137.14 1511.65 1142.72 1516.33 1146.9C1521 1151.09 1526.69 1154.58 1533.37 1157.37C1540.05 1160.16 1548.08 1161.56 1557.43 1161.56C1566.79 1161.56 1580.83 1158.77 1599.55 1153.19C1618.26 1147.6 1640.65 1137.83 1666.72 1123.88C1692.79 1109.92 1742.26 1077.12 1815.12 1025.48C1887.98 973.842 1930.42 943.138 1942.45 933.368C1954.49 923.598 1961.17 917.667 1962.51 915.573C1963.84 913.48 1963.84 911.386 1962.51 909.293C1961.17 907.199 1937.77 915.573 1892.32 934.415ZM1131.31 956.396C1140 956.396 1146.35 957.792 1150.36 960.583C1154.37 963.375 1156.37 965.817 1156.37 967.911C1156.37 970.004 1152.7 982.565 1145.34 1005.59C1137.99 1028.62 1130.3 1045.37 1122.28 1055.84C1114.26 1066.31 1108.25 1072.24 1104.23 1073.63C1100.22 1075.03 1096.21 1071.54 1092.2 1063.16C1088.19 1054.79 1086.19 1043.63 1086.19 1029.67C1086.19 1015.71 1088.53 1002.1 1093.21 988.846C1097.88 975.587 1103.23 966.864 1109.25 962.677C1115.26 958.49 1122.62 956.396 1131.31 956.396ZM1571.47 1020.25C1573.48 1020.6 1575.48 1020.95 1577.49 1021.29C1576.82 1024.09 1576.15 1026.88 1575.48 1029.67C1574.15 1035.25 1569.47 1041.53 1561.44 1048.51C1553.42 1055.49 1545.4 1060.72 1537.38 1064.21C1533.37 1065.96 1529.36 1067.7 1525.35 1069.45C1527.69 1063.51 1530.03 1057.58 1532.37 1051.65C1537.05 1039.79 1543.73 1031.41 1552.42 1026.53C1561.11 1021.64 1567.46 1019.55 1571.47 1020.25ZM827.502 1159.47C818.478 1180.4 809.454 1201.34 800.43 1222.27C782.383 1264.14 761.661 1306.71 738.266 1349.97C714.871 1393.24 689.804 1435.11 663.067 1475.58C636.329 1516.06 622.292 1538.39 620.955 1542.58C619.618 1546.76 611.931 1558.28 597.894 1577.12C583.857 1595.96 565.141 1620.04 541.746 1649.34C518.35 1678.65 492.616 1708.31 464.541 1738.32C436.467 1768.33 407.724 1795.89 378.313 1821.01C348.902 1846.13 326.843 1863.58 312.138 1873.35C297.432 1883.12 286.737 1889.05 280.053 1891.14C273.369 1893.24 269.024 1891.84 267.018 1886.96C265.013 1882.07 264.01 1876.14 264.01 1869.16C264.01 1862.18 268.355 1845.44 277.045 1818.92C285.735 1792.4 298.769 1763.79 316.148 1733.08C333.528 1702.38 351.241 1674.12 369.289 1648.3C387.337 1622.48 411.735 1590.73 442.483 1553.04C473.231 1515.36 491.947 1493.73 498.632 1488.15C505.316 1482.56 514.006 1473.14 524.701 1459.88C535.395 1446.62 555.783 1424.29 585.862 1392.89C615.942 1361.49 663.735 1314.73 729.242 1252.63C761.995 1221.57 794.749 1190.52 827.502 1159.47Z" fill="#FFFFFF" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
<g id="Layer-1">
<motion.path animate={controlls1} d="M1207.74 77.9509C1183.84 65.9981 705.03 356.887 661.766 400.152" fill="none" opacity="0" stroke="#CB9F1F" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-2">
<motion.path animate={controlls2} d="M556.113 467.913C535.927 467.913 237.252 695.763 237.252 701.954" fill="none" opacity="0" stroke="#C70012" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-3">
<motion.path animate={controlls3} d="M326.669 776.269C303.37 795.601 279.516 814.051 253.906 829.264C235.814 840.011 221.728 859.559 203.911 870.935C84.7459 947.023 362.894 921.843 405.861 916.406C411.137 915.738 424.977 910.665 429.392 914.666" fill="none" opacity="0" stroke="#CB9F1F" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-4">
<motion.path animate={controlls4} d="M1329.92 183.399C1323.95 188.876 1182.94 522.637 1183.77 527.976" fill="none" opacity="0" stroke="#C70012" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-5">
<motion.path animate={controlls5} d="M840.205 1355.69C797.247 1484.56 715.45 1591.86 641.446 1702.86" fill="none" opacity="0" stroke="#CB9F1F" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-6">
<motion.path animate={controlls6} d="M710.763 1143.58C665.893 1143.58 281.381 1567.21 264.062 1636.49" fill="none" opacity="0" stroke="#C70012" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-7">
<motion.path animate={controlls7} d="M1052.27 525.193C1034.58 525.193 940.45 789.247 929.282 822.751" fill="none" opacity="0" stroke="#CB9F1F" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-8">
<motion.path animate={controlls8} d="M1211.85 848.407C1211.77 848.569 1243.41 821.09 1251.43 814.449C1273.26 796.371 1303.91 778.302 1322.63 758.422C1385.24 691.918 1472.33 643.282 1531.4 577.543" fill="none" opacity="0" stroke="#C70012" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-9">
<motion.path animate={controlls9} d="M872.602 434.823C928.469 399.347 989.748 355.239 1040.97 312.95" fill="none" opacity="0" stroke="#CB9F1F" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-10">
<motion.path animate={controlls10} d="M1443.55 507.906C1435.75 500.105 1516.65 467.103 1531.53 458.175C1596.32 419.303 1656.24 364.262 1724.72 330.021" fill="none" opacity="0" stroke="#C70012" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
<g id="Layer-11">
<motion.path animate={controlls11} d="M802.869 954.984C796.494 949.415 604.831 994.481 588.875 1008.22" fill="none" opacity="0" stroke="#CB9F1F" stroke-linejoin="round" stroke-width="20.5493"/>
</g>
</svg>


    )
}
export default Logo