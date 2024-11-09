const tomb = 
    {
        uralkodo_nevI : '   .ISTVÁN',
        esemeny_I1 : 'Koronázás',
        evszam_I1 : '1000',
        
        esemeny_I2 : 'Pannonhalmi apátság megalapítása',
        evszam_I2 : '1001',

        uralkodo_nevB : 'IV.Béla',
        esemeny_B : 'Tatájárás',
        evszam_B : '1241-1242',

        uralkodo_nevM : 'Mátyás király',
        esemeny_M1 : 'Bélcs elfoglalása',
        evszam_M1 : '1485',

        esemeny_M2 : 'Kenyérmezei csata',
        evszam_M2 : '1479',

        uralkodo_nevF : 'II.Rákoczi Ferenc',
        esemeny_F1 : 'A szabadságharc kezdete',
        evszam_F1 : '1703',

        esemeny_F2 : 'A szabadságharc vége',
        evszam_F2 : '1711',

    }

const tbody = document.querySelector("tbody")



function generateheader(elso, masodik, harmadik) {
    const sor = document.createElement('tr')
    const elsocell = document.createElement('th')
    const masodikcella = document.createElement('th')
    const harmadikcella = document.createElement('th')
    
    elsocell.innerHTML = elso
    masodikcella.innerHTML = masodik
    harmadikcella.innerHTML = harmadik
    sor.appendChild(elsocell)
    sor.appendChild(masodikcella)
    sor.appendChild(harmadikcella)

    tbody.appendChild(sor)

    
}

function generatetable() {
    const sor = document.createElement('tr')
    const elsocell = document.createElement('td')
    const masodikcella = document.createElement('td')
    const harmadikcella = document.createElement('td')
    
    for(adat in tomb); {
        elsocell.innerHTML = adat.innerHTML
        sor.appendChild(elsocell)
    }

    tbody.appendChild(sor)
}




