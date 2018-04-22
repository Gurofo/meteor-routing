import { Accounts } from "meteor/accounts-base";

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile;
  return user;
});

Accounts.validateLoginAttempt(options => {
  if (options.error) {
    throw new Meteor.Error("user-not-found", options.error.reason);
  }

  switch (options.methodName) {
    case "createUser":
      throw new Meteor.Error(
        403,
        "login-restricted",
        "Login disabled onCreateUser"
      );
      break;
    default:
      return true;
      break;
  }
});
