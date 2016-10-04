@echo off
echo cleaning aot directory
rd /s /q aot
echo ================================
echo ================================
echo ============ AOT ===============
echo ================================
echo ================================
echo cleaning main.ts and index.html for JIT
xcopy app\main.ts.aot app\main.ts /Y
xcopy index.html.jit index.html /Y
echo RUN 1: compiling with ngc...
cmd /c "node_modules\.bin\ngc -p tsconfig-aot.json"
REM echo swapping entry point main.ts for aot...
REM cd app/
REM xcopy main.ts.aot main.ts /Y
REM echo RUN 2: compiling with ngc...
REM cd ..
REM cmd /c "node_modules\.bin\ngc -p tsconfig-aot.json"
echo ================================
echo ================================
echo ================================
echo ======== ROLL UP ===============
echo ================================
echo ================================
echo ================================
cmd /c "node_modules\.bin\rollup -c rollup.js"
echo ================================
echo ================================
echo ===== SWITCHING INDEX.HTML  ====
echo ================================
echo ================================
echo ================================
xcopy index.html.aot index.html /Y

