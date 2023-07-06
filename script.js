
        async function selectionSort() {
            let kotakKotak = document.querySelectorAll('.kotak');
            let n = kotakKotak.length;
            for (let i = 0; i < n - 1; i++) {
                let indeksMin = i;
                for (let j = i + 1; j < n; j++) {
                    let tinggi1 = parseInt(kotakKotak[j].style.height);
                    let tinggiMin = parseInt(kotakKotak[indeksMin].style.height);
                    if (tinggi1 < tinggiMin) {
                        indeksMin = j;
                    }
                }
                if (indeksMin !== i) {
                    let tempHeight = kotakKotak[i].style.height;
                    let tempText = kotakKotak[i].textContent;
                    kotakKotak[i].style.height = kotakKotak[indeksMin].style.height;
                    kotakKotak[i].textContent = kotakKotak[indeksMin].textContent;
                    kotakKotak[indeksMin].style.height = tempHeight;
                    kotakKotak[indeksMin].textContent = tempText;
                    await jedaWaktu(500); // Jeda untuk animasi (lebih lambat)
                }
            }
        }

        async function insertionSort() {
            let kotakKotak = document.querySelectorAll('.kotak');
            let n = kotakKotak.length;
            for (let i = 1; i < n; i++) {
                let saatIniHeight = kotakKotak[i].style.height;
                let saatIniText = kotakKotak[i].textContent;
                let j = i - 1;
                while (j >= 0 && parseInt(kotakKotak[j].style.height) > parseInt(saatIniHeight)) {
                    kotakKotak[j + 1].style.height = kotakKotak[j].style.height;
                    kotakKotak[j + 1].textContent = kotakKotak[j].textContent;
                    j--;
                }
                kotakKotak[j + 1].style.height = saatIniHeight;
                kotakKotak[j + 1].textContent = saatIniText;
                await jedaWaktu(500); // Jeda untuk animasi (lebih lambat)
            }
        }

        function mulaiPengurutan(algoritma) {
            switch (algoritma) {
                case 'bubbleSort':
                    bubbleSort();
                    break;
                case 'selectionSort':
                    selectionSort();
                    break;
                case 'insertionSort':
                    insertionSort();
                    break;
                default:
                    console.log('Algoritma pengurutan tidak valid');
            }
        }