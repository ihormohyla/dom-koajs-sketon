#/bin/sh
find ./ -type f -name "*.js" -exec sh -c "/usr/bin/touch {} \
    && /usr/bin/gzip -9v < {} > {}.gz" \;
