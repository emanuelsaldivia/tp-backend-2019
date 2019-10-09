'use strict';

module.exports = function(Services) {
    Services.validatesPresenceOf('name', 'description', 'included', 'extra-info');
    Services.validatesUniquenessOf('name', {message: 'ya existe un servicio con este nombre'});
    Services.validatesLengthOf('description', {max: 200, message: {max: 'Excedio el maximo de caracteres (200)'}});
};
