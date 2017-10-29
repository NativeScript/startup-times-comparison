//
//  ViewController.m
//  NativeIOSApp
//
//  Created by Vasil Chimev on 10/28/17.
//  Copyright © 2017 NativeScript. All rights reserved.
//

#include <sys/sysctl.h>
#include <sys/types.h>
#include <sys/time.h>

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

double __tns_uptime() {
    pid_t pid = [[NSProcessInfo processInfo] processIdentifier];
    int mib[4] = { CTL_KERN, KERN_PROC, KERN_PROC_PID, pid };
    struct kinfo_proc proc;
    size_t size = sizeof(proc);
    sysctl(mib, 4, &proc, &size, NULL, 0);
    
    struct timeval current;
    gettimeofday(&current, NULL);
    
    return (double)(current.tv_sec - proc.kp_proc.p_starttime.tv_sec) * 1000.0 + (double)(current.tv_usec - proc.kp_proc.p_starttime.tv_usec) / 1000.0;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)buttonTapped:(UIButton *)sender {
    [sender setTitle:@"Yeah!" forState:UIControlStateNormal];
}

@end
