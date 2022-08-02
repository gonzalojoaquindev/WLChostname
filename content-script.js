



/* document.getElementById("LnC").addEventListener("click", alert('holi'), false); */

/* window.addEventListener('load', () => {
    const clients = document.getElementById("LnC")
    const clients = document.querySelector('frame #mainFrame')
    alert(clients);

    clients.addEventListener("click", () => {
        console.log('holi')
    });
    document.getElementById(LnC)

}, false);
 */
/* alert('chupalo con mayo'); */

/* document.querySelector('frame #mainFrame') */





/*
window.addEventListener('load', () => {
    window.open("http://10.16.43.97/screens/apf/mobile_station_list.html", "nombre de la ventana")
    document.getElementById(LnC)
}, false);
 */

/* if (window.location.href == 'http://10.16.43.97/screens/frameset.html') {
    alert('chupalo con mayo')
    window.open("http://10.16.43.97/screens/apf/mobile_station_list.html", "Clientes Mesh").focus()
    el = document.getElementsByClassName('listNoPad')
    console.log('el')

} */

/* alert('Chupalo con mayo') */

el = document.getElementsByClassName('listNoPad')
const hostname = new Map()
    .set("10.16.42.163", "B-01 HxGN")

    .set("10.16.42.164", "B-02 HxGN")

    .set("10.16.42.177", "C-03 HxGN")

    .set("10.16.42.181", "C-04 HxGN")

    .set("10.16.42.173", "C-05 HxGN")

    .set("10.16.42.221", "C-10 HxGN")

    .set("10.16.42.213", "C-100 HxGN")

    .set("10.16.42.222", "C-11 HxGN")

    .set("10.16.42.206", "C-13 HxGN")

    .set("10.16.42.203", "C-16 HxGN")

    .set("10.16.42.174", "C-18 HxGN")

    .set("10.16.42.175", "C-20 HxGN")

    .set("10.16.42.182", "C-21 HxGN")

    .set("10.16.42.176", "C-23 HxGN")

    .set("10.16.42.178", "C-25 HxGN")

    .set("10.16.42.179", "C-26 HxGN")

    .set("10.16.42.180", "C-28 HxGN")

    .set("10.16.42.184", "C-29 HxGN")

    .set("10.16.42.183", "C-30 HxGN")

    .set("10.16.42.160", "D-01 HxGN")

    .set("10.16.42.161", "D-02 HxGN")

    .set("10.16.42.162", "D-03 HxGN")

    .set("10.16.42.200", "D-04 HxGN")

    .set("10.16.42.217", "D-06 HxGN")

    .set("10.16.42.166", "G-01 HxGN")

    .set("10.16.42.167", "G-02 HxGN")

    .set("10.16.42.156", "L-01 HxGN")

    .set("10.16.42.158", "S-01 HxGN")

    .set("10.16.42.159", "S-02 HxGN")

    .set("10.16.42.189", "SH-01 HxGN")

    .set("10.16.42.196", "SH-02 HxGN")

    .set("10.16.42.149", "T-05 HxGN")

    .set("10.16.42.150", "T-06 HxGN")

    .set("10.16.42.151", "T-07 HxGN")

    .set("10.16.42.152", "T-08 HxGN")

    .set("10.16.42.155", "T-11 HxGN")

    .set("10.16.42.168", "W-01 HxGN")

    .set("10.16.42.169", "W-02 HxGN")

    .set("10.16.42.214", "WT-01 HxGN")

    .set("10.16.42.215", "WT-02 HxGN")

    .set("10.16.56.51", "C03 AP")

    .set("10.16.56.52", "C04 AP")

    .set("10.16.56.53", "C05 AP")

    .set("10.16.56.54", "C13 AP")

    .set("10.16.56.55", "C16 AP")

    .set("10.16.56.56", "C18 AP")

    .set("10.16.56.57", "C20 AP")
    .set("10.16.56.58", "C21 AP")
    .set("10.16.56.59", "C23 AP")
    .set("10.16.56.60", "C25 AP")
    .set("10.16.56.61", "C26 AP")
    .set("10.16.56.62", "C28 AP")
    .set("10.16.56.63", "C29 AP")
    .set("10.16.56.64", "C30 AP")
    .set("10.16.56.65", "C100 AP")

    .set("10.16.56.66", "WT01 AP")

    .set("10.16.56.67", "WT02 AP")

    .set("10.16.56.68", "T07 AP")

    .set("10.16.56.69", "T08 AP")

    .set("10.16.56.70", "T50 AP")

    .set("10.16.56.71", "T06 AP")

    .set("10.16.56.72", "C101 AP")

    .set("10.16.56.73", "C102 AP")

    .set("10.16.56.101", "C03 SW")

    .set("10.16.56.102", "C04 SW")

    .set("10.16.56.103", "C05 SW")

    .set("10.16.56.104", "C13 SW")

    .set("10.16.56.105", "C16 SW")

    .set("10.16.56.106", "C18 SW")

    .set("10.16.56.107", "C20 SW")

    .set("10.16.56.108", "C21 SW")

    .set("10.16.56.109", "C23 SW")

    .set("10.16.56.110", "C25 SW")

    .set("10.16.56.111", "C26 SW")

    .set("10.16.56.112", "C28 SW")

    .set("10.16.56.113", "C29 SW")

    .set("10.16.56.114", "C30 SW")

    .set("10.16.56.115", "C100 SW")

    .set("10.16.56.116", "WT01 SW")

    .set("10.16.56.117", "WT02 SW")

    .set("10.16.56.118", "T07 SW")

    .set("10.16.56.119", "T08 SW")

    .set("10.16.56.120", "T50 SW")

    .set("10.16.56.121", "T06 SW")

    .set("10.16.56.122", "C101 SW")

    .set("10.16.56.123", "C102 SW")

    .set("10.16.56.151", "C03 SMCAP")

    .set("10.16.56.152", "C04 SMCAP")

    .set("10.16.56.153", "C05 SMCAP")

    .set("10.16.56.154", "C13 SMCAP")

    .set("10.16.56.155", "C16 SMCAP")

    .set("10.16.56.156", "C18 SMCAP")

    .set("10.16.56.157", "C20 SMCAP")

    .set("10.16.56.158", "C21 SMCAP")

    .set("10.16.56.159", "C23 SMCAP")

    .set("10.16.56.160", "C25 SMCAP")

    .set("10.16.56.161", "C26 SMCAP")

    .set("10.16.56.162", "C28 SMCAP")

    .set("10.16.56.163", "C29 SMCAP")

    .set("10.16.56.164", "C30 SMCAP")

    .set("10.16.56.165", "C100 SMCAP")

    .set("10.16.56.166", "WT01 SMCAP")

    .set("10.16.56.167", "WT02 SMCAP")

    .set("10.16.56.168", "T07 SMCAP")

    .set("10.16.56.169", "T08 SMCAP")

    .set("10.16.56.170", "T50 SMCAP")

    .set("10.16.56.171", "T06 SMCAP")

    .set("10.16.56.172", "C101 SMCAP")

    .set("10.16.56.173", "C102 SMCAP")
    .set("10.16.44.131", "AP Radar 1")
    .set("10.16.44.120", "Radar 1")
    .set("10.16.44.130", "AP Radar 2")
    .set("10.16.44.121", "Radar 2")
    .set("10.16.44.110", "Teodolito")
    .set("10.16.44.140", "Ap Teodolito")
    .set("10.16.44.113", "Ibis guardian M1")
    .set("10.16.44.114", "ibis guardian M2 ")
    .set("10.16.44.150", "Ap nuevo radar ")
    .set("10.16.44.151", "Ap nuevo radar 2 ")
    .set("10.16.44.122", "Ibis FM1")
    .set("10.16.44.123", "Ibis FM2 ")
    .set("10.16.44.50", "Geotec. Ripios")
    .set("10.16.44.51", "Geotec. Ripios")
    .set("10.16.44.52", "Geotec. Ripios")
    .set("10.16.44.53", "Geotec. Ripios")
    .set("10.16.44.54", "Geotec. Ripios")
    .set("10.16.44.55", "Geotec. Ripios")
    .set("10.16.44.56", "Geotec. Ripios")
    .set("10.16.44.57", "Geotec. Ripios")


for (let step = 0; step < el.length; step = step + 16) {
    const IP = el[1 + step].children[0].value
    el[5 + step].children[0].value = hostname.get(IP)
}