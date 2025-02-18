import "package:flutter/material.dart";

class splashScreen extends StatefulWidget {
  const splashScreen({super.key});

  @override
  State<splashScreen> createState() => _splashScreenState();
}

class _splashScreenState extends State<splashScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Image.network(
                "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdndzNzU0NWRuZG94OGh3cHppeGRrdDFpa3Mwam90dWluZGI5ZmE4OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hTsKZJM9wMplEWFcla/giphy.gif")
          ],
        ),
      ),
    );
  }
}
