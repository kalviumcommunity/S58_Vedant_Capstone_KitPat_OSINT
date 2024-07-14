exports.validateAccountId = (accountId) => {
    const regex = /^[A-Za-z0-9]{25}$/;
    return regex.test(accountId);
  };