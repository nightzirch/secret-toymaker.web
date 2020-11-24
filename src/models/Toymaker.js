class Toymaker {
  /**
   * @param {string} email - Email used to create user
   * @param {string} name - Display name of the user from the provider source
   * @param {string} uid - Unique ID generated on creation
   * @param {object} providers - Object of providers used to create the account
   * @returns {Toymaker}
   */
  constructor(email, name, uid, providers) {
    this.email = email || null;
    this.name = name || null;
    this.uid = uid || null;
    this.providers = providers;
    this.consents = {
      emailEventUpdates: false,
      emailFutureEvents: false,
      pushEventUpdates: false,
      pushFutureEvents: false,
    };
  }

  static fromData(data) {
    const providerData = data.providerData.reduce(
      (providers, p) => ({
        ...providers,
        [p.providerId]: {
          providerId: p.providerId || null,
          email: p.email || null,
          uid: p.uid || null,
          username: p.username || null,
        },
      }),
      {}
    );

    return new Toymaker(data.email, data.displayName, data.uid, providerData);
  }
}

export default Toymaker;
