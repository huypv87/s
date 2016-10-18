<?php
	set_time_limit(0);
	$u = isset($argv[1]) ? $argv[1] : 'http://demo.web3canvas.com/themeforest/tomato/';
	$lines = file('links.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	foreach ($lines as $line) {
		$p = str_replace($u, '', $line);
		$dir = dirname($p);
		if (!is_dir($dir)) {
			mkdir($dir, 0755, true);
			echo 'mkdir: ' . $dir . PHP_EOL;
		}		
		
		if (file_exists($p)) {
			echo '[SKIP] Download: ' . $line . ' => ' . $p . PHP_EOL;
		} else {
			$content = file_get_contents($line);
			if ($content !== false) {
				file_put_contents($p, $content);
				echo '[OK] Download: ' . $line . ' => ' . $p . PHP_EOL;
			} else {
				echo '[ERR] Download: ' . $line . ' => ' . $p . PHP_EOL;
			}
		}
	}