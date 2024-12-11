// В этом файле создание намеренных ошибок для Eslint и Sentry
let variableUnused = 'Hello';

function withoutArguments(arg1, arg2) {
  return ' wold!';
}

console.log(withoutArguments());

// Вызов несуществующей функции для отправки в Sentry
myUndefinedFunction();

// Инициализация и настройка Sentry
Sentry.onLoad(() => {
  Sentry.init({
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
});
