exports.validateAccountId = (accountId) => {
    const regex = /^[A-Za-z0-9]{24}$/;
    return regex.test(accountId);
  };