import Log from "./logger.js";

(
    async () => {
    const result = await Log(
        "backend",
        "info",
        "service",
        "Testing logging middleware"
    );
    console.log(result);
})();