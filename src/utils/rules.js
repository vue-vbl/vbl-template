export var isMail = {
    getMessage: field => '邮件格式不正确',
    validate: value => value.indexOf('@') > 0
};
