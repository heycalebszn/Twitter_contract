async function main() {
    const MyContract = await ethers.getContractFactory("My Contract");
    const contract = await MyContract.deploy("Hello, Blockchain");
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
}
