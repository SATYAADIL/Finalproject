function printSegitiga(tinggi: number): void {
    for (let i = 1; i <= tinggi; i++) {
        console.log(' '.repeat(tinggi - i) + '*'.repeat(2 * i - 1));
    }
}

printSegitiga(10);
