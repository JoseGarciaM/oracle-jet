```bash
joselocgm@Joselos-MBP theming % ojet add theming
Installing sass and pcss
Executing: npm install node-sass@5.0.0 postcss-calc@6.0.1 autoprefixer@9.1.5 --save-dev=true
npm WARN deprecated har-validator@5.1.5: this library is no longer supported

npm
 WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

npm WARN deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.

npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142


npm ERR! code 1

npm ERR! path /Users/joselocgm/Dev/Oracle/oracle-jet/mooc/mvvm/basics/theming/node_modules/node-sass
npm ERR! command failed

npm ERR! command sh -c node scripts/build.js

npm ERR! Building: /usr/local/bin/node /Users/joselocgm/Dev/Oracle/oracle-jet/mooc/mvvm/basics/theming/node_modules/node-gyp/bin/node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/ast.o ../src/libsass/src/ast.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/ast.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/ast_fwd_decl.o ../src/libsass/src/ast_fwd_decl.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/ast_fwd_decl.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/backtrace.o ../src/libsass/src/backtrace.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/backtrace.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/base64vlq.o ../src/libsass/src/base64vlq.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/base64vlq.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/bind.o ../src/libsass/src/bind.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/bind.o.d.raw   -c
npm
 ERR!   cc -o Release/obj.target/libsass/src/libsass/src/cencode.o ../src/libsass/src/cencode.c '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/cencode.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/check_nesting.o ../src/libsass/src/check_nesting.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/check_nesting.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/color_maps.o ../src/libsass/src/color_maps.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/color_maps.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/constants.o ../src/libsass/src/constants.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/constants.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/context.o ../src/libsass/src/context.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/context.o.d.raw   -c
npm ERR!   c++ -o Release/obj.target/libsass/src/libsass/src/cssize.o ../src/libsass/src/cssize.cpp '-DNODE_GYP_MODULE_NAME=libsass' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DLIBSASS_VERSION="3.5.5"' -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/include/node -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/src -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/config -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/openssl/openssl/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/uv/include -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/zlib -I/Users/joselocgm/Library/Caches/node-gyp/16.14.2/deps/v8/include -I../src/libsass/include  -O3 -gdwarf-2 -mmacosx-version-min=10.7 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=c++11 -stdlib=libc++ -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/libsass/src/libsass/src/cssize.o.d.raw   -c
npm ERR!
Error: child process exited with code: 1
```