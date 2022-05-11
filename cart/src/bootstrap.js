import faker from "faker";

const mount = (el) => {
    const cartText = `<div>${faker.random.number()}</div>`
    el.innerHTML = cartText
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount }