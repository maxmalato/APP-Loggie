const ValidateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLocaleLowerCase())
}

export default ValidateEmail