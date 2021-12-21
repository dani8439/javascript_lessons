const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");

for (let i = 0; i < items.length; i++) {
  checklist.innerHTML += `
         <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough">
                    <span class="custom-checkbox">${items[i]}
                </label>
            </div>
    `;
}
