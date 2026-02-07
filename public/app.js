function suma(a, b) {
    a= a+1;
    return a + b;
}

document.getElementById('out').textContent = `5 + 8 = ${suma(5, 8)}`;