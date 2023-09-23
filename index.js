/*
1) Napište JavaScriptový program, který vybere element s třídou question a nastaví jeho obsah na nějakou kvízovou otázku, například

  Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.

2) Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. Vyberte element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. Vyberte element s třidou answer. Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu answer--correct. V opačném případě přidejte třídu answer--wrong.
*/
const otazkaElement = document.querySelector('.question');
otazkaElement.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const odpoved = prompt('Jaká je správná odpověď?');

const odpovedTextElement = document.querySelector('.answer__text');
odpovedTextElement.textContent = odpoved;
const odpovedElement = document.querySelector('.answer');

if (odpoved === 'Bell') {
  odpovedElement.classList.add('answer--correct');
} else {
  odpovedElement.classList.add('answer--wrong');
}
