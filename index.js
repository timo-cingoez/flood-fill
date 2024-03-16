const container = document.getElementById('flood_fill_container');

function init() {
    let y = 0;
    let x = 0;
    for (let i = 0; i < 100; i++) {
        if (i > 0 && i % 10 === 0) {
            y++;
            x = 0;
        }
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add('empty');
        cell.setAttribute('x', x.toString());
        cell.setAttribute('y', y.toString());
        cell.addEventListener('click', function () {
            const x = this.getAttribute('x');
            const y = this.getAttribute('y');
            if (this.classList.contains('empty')) {
                floodFill(x, y, 'empty', 'filled');
            } else {
                floodFill(x, y, 'filled', 'empty');
            }
        });
        container.appendChild(cell);
        x++;
    }
}

function getCell(x, y) {
    const cell = document.querySelector(`div[x="${x}"][y="${y}"]`);
    if (cell) {
        return cell;
    }
    console.error(`NO CELL FOUND AT X: ${x} Y: ${y}`);
    return null;
}

async function floodFill(x, y, classFrom, classTo) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
        return;
    }
    const cell = getCell(x, y);
    if (cell === null) {
        return;
    }
    if (cell.classList.contains(classFrom)) {
        cell.classList.remove(classFrom);
        cell.classList.add(classTo);
        setTimeout(() => {
            floodFill(Number(x), Number(y) + 1, classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x), Number(y) - 1, classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x) + 1, Number(y), classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x) - 1, Number(y), classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x) + 1, Number(y) + 1, classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x) - 1, Number(y) - 1, classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x) + 1, Number(y) + 1, classFrom, classTo);
        }, 100);
        setTimeout(() => {
            floodFill(Number(x) - 1, Number(y) - 1, classFrom, classTo);
        }, 100);
    }
}

init();
