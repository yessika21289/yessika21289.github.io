<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'yessika21289');

/** MySQL database username */
define('DB_USER', 'yessika21289');

/** MySQL database password */
define('DB_PASSWORD', 'aj041304');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '0^d8/3uLcDRG{?ze6l^+M{/@2-}I95X NC*iif:AoyL!,_SB$A:ESxZnj0yE`jym');
define('SECURE_AUTH_KEY',  '!IylT.f>kugi?FyN|!lML*=5kM>kBI7R-=sMO*rnR*yPNe{it*;bVO0(M9:%||A`');
define('LOGGED_IN_KEY',    '_Yaw.D)fLton2BeAwB5}I%NjZtKG8zorr>cJGfk:Qzt+z`)eTd3J3|dcxylg.nxW');
define('NONCE_KEY',        '> Y%pEI8~Ga`;^-/v9`fwYDK^l@&$Q1m?q]bD([TzN6w_&[*# eNdIm;MZy=T7Fq');
define('AUTH_SALT',        '@?D%v9(d{{F#ijG{oS sD$0y1sNR-}}*ow?E/6bc.9:QO%g^lX &hGPTNMn:,F*y');
define('SECURE_AUTH_SALT', ' ScUTk~:5O~LInPjyLw:jgyr,uY=5o5tA;~$4Y/(BzIoip}I2u>:}3a=Z0po?L0<');
define('LOGGED_IN_SALT',   'zIPzH&^s6!_OOp.[J[~G y2s82awtbX>KGuqdN`vrq(=NKe<vV{ud++& D]k020F');
define('NONCE_SALT',       'Z:<V5a+]yS;~ (),oFVW}~v{c,e I(zEfO 5qP+pu%[[lTr8g0z!8(HUMk4Eq}{9');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'y_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
