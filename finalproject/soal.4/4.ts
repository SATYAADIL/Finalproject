function getGrade(nilai: number): string {
    return nilai >= 90 ? 'A' :
           nilai >= 80 ? 'B' :
           nilai >= 70 ? 'C' :
           nilai >= 60 ? 'D' : 'E';
}

function main(): void {
    const inputs = ['Web', 'Komputer', 'Statistika', 'Basis Data'].map(subject => 
        parseFloat(prompt(`Nilai Pemrograman ${subject}:`) || '')
    );

    if (inputs.some(n => isNaN(n) || n < 0 || n > 100)) {
        return console.log("Nilai harus antara 0 dan 100.");
    }

    const rataRata = inputs.reduce((a, b) => a + b) / inputs.length;
    console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${getGrade(rataRata)}`);
}

main();
