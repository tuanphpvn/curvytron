/**
 * Player
 *
 * @param {SocketClient} client
 * @param {String} name
 * @param {String} color
 */
function Player(client, name, color, mail)
{
    BasePlayer.call(this, name, color, mail);

    this.client = client;
}

Player.prototype = Object.create(BasePlayer.prototype);