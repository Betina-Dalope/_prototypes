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
define('DB_NAME', 'wordpress-prototypes');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

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
define('AUTH_KEY',         'Oi9)FObA^O2.+hclb.exb^$,eQM7`iTjPMPiF]~7fK=LEL5tMnImBGO9@;#~H8nA');
define('SECURE_AUTH_KEY',  'fk_CYH$O3o2MTS%! oojd3ycv+B0xX[ wn&QqPK?Yq3UaEOkH]`N-8i[]^Q?,^7e');
define('LOGGED_IN_KEY',    'aG{T:JJo#lN&&fj(OvXkN4E!s^R]664v/[)Ua5RBpdh{Nt]Y+6-Z|s3WIA?p*lSJ');
define('NONCE_KEY',        '4YN?Ue34mzxV!d84TkJ6`_v4+7V{J]-WEl75VIb9zBA$o,G_&PPI,{b=s|!q;GqS');
define('AUTH_SALT',        'HXdU>^mIK$JeM-[~;.Z8_0-LKLt>&fG18)dJvP,vz!d=.{{85U7|}EH&zI: +pbV');
define('SECURE_AUTH_SALT', 'x[JMBpdsf;a9F-H_|V,rVE~of? =B.qVasl*fFWiM9RrS6gmly^k6|I<%vlzbEfw');
define('LOGGED_IN_SALT',   '&=Hg4([kXLANtd4(YaAzV]I98H]8Z|qZ]GQ<qZ%/b~%o9%09[z{*|1bx`)=n-A*)');
define('NONCE_SALT',       '%dgxM4XbZG!mae@gGRHHn;/9qoz[&t<zKWipOrdAwEB5j5)[Jk2D7A>z4kcGvhK%');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
