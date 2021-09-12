// Desenvolvimento da calculadora
function App() {
    this.display = document.querySelector('.text-display');

    this.start = () => {
        this.display.value = 0;

        this.clickButtons();
        this.keyboardButtons();
    };

    this.clickButtons = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                if(this.display.value === '0') this.display.value = "";

                this.sendDisplay(el.innerText);
            };

            if(el.classList.contains('btn-del')) this.btnDel();
            if(el.classList.contains('btn-reset')) this.btnReset();
            if(el.classList.contains('btn-eq')) this.doAccount();

            this.display.focus();
        });
    };

    this.sendDisplay = (value) => {
        if(value.match(/x/)) {
            value = value.replace('x', '*');
        }

        this.display.value += value;
    };

    this.btnDel = () => {
        this.display.value = this.display.value.slice(0, -1);
        if(this.display.value === "") this.display.value = 0;
    };

    this.btnReset = () => this.display.value = "0";

    this.doAccount = () => {
        try {
            let count = eval(this.display.value);

            if(count === undefined) count = this.display.value = 0;

            if(count === 0) {
                count = this.display.value = 0;
            } else if(!count) {
                this.display.value = "Invalid";
            }

            this.display.value = String(count);
        } catch(e) {
            this.display.value = "Invalid";
        };
    };

    this.keyboardButtons = () => {
        document.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) this.doAccount();
            if(e.keyCode === 46) this.display.value = "0";
            if(e.keyCode === 9) this.display.value = this.display.value.slice(0, -1);
        });
    };
}

const app = new App();
app.start();


// Aplicação dos temas na página.
const html = document.querySelector('html');
const theme1 = document.querySelector('#theme-1');
const theme2 = document.querySelector('#theme-2');
const theme3 = document.querySelector('#theme-3');

theme1.addEventListener('change', () => {
    html.classList.remove('theme-2', 'theme-3');
});

theme2.addEventListener('change', () => {
    html.classList.remove('theme-2', 'theme-3');
    html.classList.toggle('theme-2');
});

theme3.addEventListener('change', () => {
    html.classList.remove('theme-2', 'theme-3');
    html.classList.toggle('theme-3');
});
